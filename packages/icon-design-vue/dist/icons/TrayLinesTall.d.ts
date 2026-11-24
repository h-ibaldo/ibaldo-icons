import type { DefineComponent } from 'vue';

export interface TrayLinesTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayLinesTall: DefineComponent<TrayLinesTallProps>;

export default TrayLinesTall;
export { TrayLinesTall };
