"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { useLocalStorage } from "@uidotdev/usehooks";

import { Accordion } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NavItem from "./nav-item";

const Sidebar = ({ storageKey = "t-sidebar-state" }) => {
  const [expanded, setExpanded] = useLocalStorage(storageKey, "");
  const { organization: activeOrganization, isLoaded: isLoadedOrganization } =
    useOrganization();
  const { userMemberships, isLoaded: isLoadedMemberships } =
    useOrganizationList({
      userMemberships: {
        infinite: true,
      },
    });

  const defaultAccordionValue = Object.keys(expanded).reduce((acc, value) => {
    if (expanded[value]) {
      acc.push(value);
    }
    return acc;
  }, []);

  const onExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !expanded[id],
    }));
  };

  if (
    !isLoadedOrganization ||
    !isLoadedMemberships ||
    userMemberships.isLoading
  )
    return (
      <>
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-10 w-[50%]" />
          <Skeleton className="h-10 w-10" />
        </div>
        <div className="space-y-2">
          <NavItem.Skeleton />
          <NavItem.Skeleton />
          <NavItem.Skeleton />
        </div>
        <Skeleton />
      </>
    );

  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspaces</span>
        <Button
          asChild
          type="button"
          size="icon"
          variant="ghost"
          className="ml-auto"
        >
          <Link href="/select-org">
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            onExpand={onExpand}
            key={organization.id}
            organization={organization}
            isExpanded={expanded[organization.id]}
            isActive={organization.id === activeOrganization?.id}
          />
        ))}
      </Accordion>
    </>
  );
};

export default Sidebar;
