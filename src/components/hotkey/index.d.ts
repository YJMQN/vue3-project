import { Hotkey } from './types';
declare function useHotkey(hotkeys: Hotkey[]): Array<() => void>;