import type { DefineComponent } from 'vue';

export interface InfoBlockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const InfoBlock: DefineComponent<InfoBlockProps>;

export default InfoBlock;
export { InfoBlock };
