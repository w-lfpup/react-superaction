import { ActionInterface } from "@w-lfpup/superaction";
interface HookCallback {
    (action: ActionInterface): void;
}
export declare function useAction(cb: HookCallback, args?: [string]): void;
export {};
