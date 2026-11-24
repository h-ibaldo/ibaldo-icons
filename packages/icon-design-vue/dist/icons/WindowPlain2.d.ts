import type { DefineComponent } from 'vue';

export interface WindowPlain2Props {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPlain2: DefineComponent<WindowPlain2Props>;

export default WindowPlain2;
export { WindowPlain2 };
