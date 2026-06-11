import type { ReactNode } from "react";
import React from "react";
interface ProviderProps {
    children: ReactNode;
    target: EventTarget;
}
export declare function SuperActionProvider(props: ProviderProps): React.JSX.Element;
export {};
