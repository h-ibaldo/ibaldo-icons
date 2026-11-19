import type { DefineComponent } from 'vue';

export interface PresentationFileProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PresentationFile: DefineComponent<PresentationFileProps>;

export default PresentationFile;
export { PresentationFile };
