import type { ReactNode } from "react";
import React from "react";
interface ProviderProps {
    eventNames: string[];
    children: ReactNode;
    host?: EventTarget;
    target?: EventTarget;
}
export declare function SuperActionProvider(props: ProviderProps): React.JSX.Element;
export {};
