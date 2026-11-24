import type { DefineComponent } from 'vue';

export interface RouterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Router: DefineComponent<RouterProps>;

export default Router;
export { Router };
