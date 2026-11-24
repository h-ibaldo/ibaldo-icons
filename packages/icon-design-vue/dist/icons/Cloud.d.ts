import type { DefineComponent } from 'vue';

export interface CloudProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Cloud: DefineComponent<CloudProps>;

export default Cloud;
export { Cloud };
