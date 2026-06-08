import type { ActionInterface } from "@w-lfpup/superaction";

import React from "react";

export const SuperContext = React.createContext<ActionInterface | undefined>(
	undefined,
);
