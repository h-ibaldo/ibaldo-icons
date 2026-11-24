import type { DefineComponent } from 'vue';

export interface AvatarFaceSpikySideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceSpikySide: DefineComponent<AvatarFaceSpikySideProps>;

export default AvatarFaceSpikySide;
export { AvatarFaceSpikySide };
