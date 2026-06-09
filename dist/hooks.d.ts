import { ActionInterface } from "@w-lfpup/superaction";
interface Cb {
    (action: ActionInterface): void;
}
export declare function useSuperAction(cb: Cb): void;
export declare function useActionSelector(cb: Cb, args?: [string]): void;
export {};
