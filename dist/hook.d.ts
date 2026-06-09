import { ActionInterface } from "@w-lfpup/superaction";
type Cb = (action: ActionInterface) => void;
export declare function useSuperAction(cb: Cb): void;
export declare function useAction(type: string, cb: Cb): void;
export {};
