import type { DefineComponent } from 'vue';

export interface UploadSquareDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UploadSquareDashed: DefineComponent<UploadSquareDashedProps>;

export default UploadSquareDashed;
export { UploadSquareDashed };
