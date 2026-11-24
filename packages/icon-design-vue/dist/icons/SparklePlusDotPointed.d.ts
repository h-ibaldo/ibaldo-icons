import type { DefineComponent } from 'vue';

export interface SparklePlusDotPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SparklePlusDotPointed: DefineComponent<SparklePlusDotPointedProps>;

export default SparklePlusDotPointed;
export { SparklePlusDotPointed };
