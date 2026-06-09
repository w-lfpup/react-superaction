import type { ActionInterface } from "@w-lfpup/superaction";

import { createContext } from "react";

export const SuperContext = createContext<ActionInterface | undefined>(
	undefined,
);
