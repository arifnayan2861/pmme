"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const OrganizationControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (setActive) {
      setActive({
        organization: params.organizationId,
      });
    }
  }, [setActive, params.organizationId]);

  return null;
};

export default OrganizationControl;
