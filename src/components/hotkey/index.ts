import { onUnmounted } from 'vue'
import { HotkeyManager } from './HotkeyManager'
import { Hotkey } from './types'

const manager = new HotkeyManager()
/**
 * 此处的快捷键组件引用自仓库  https://github.com/XiNiHa/vue-use-hotkey
 * import { useHotkey } from '@components/hotkey'
 * export default defineComponent({
 *  setup () {
 *   useHotkey([
 *     {
 *       key: ['Control', 'Space'],
 *       preventDefault: true,
 *       handler () {
 *         console.log('Sweet!')
 *       }
 *     }
 *   ])
 *  }
 * })
 * 
 * 
 */

/**
 * Register hotkeys.
 * Hotkeys are automatically removed when the component gets unmounted.
 *
 * @param hotkeys Hotkeys to register.
 * @returns Array of functions for removing corresponding hotkeys.
 */
export function useHotkey (hotkeys: Hotkey[]): Array<() => void> {
  hotkeys.forEach(hk => manager.registerHotkey(hk))

  onUnmounted(() => hotkeys.forEach(hk => manager.removeHotkey(hk)))

  return hotkeys.map(hk => () => { manager.removeHotkey(hk) })
}
