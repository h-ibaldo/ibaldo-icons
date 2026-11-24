import type { DefineComponent } from 'vue';

export interface AvatarHeadSpikySideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadSpikySide: DefineComponent<AvatarHeadSpikySideProps>;

export default AvatarHeadSpikySide;
export { AvatarHeadSpikySide };
