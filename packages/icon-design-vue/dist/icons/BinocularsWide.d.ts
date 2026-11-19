import type { DefineComponent } from 'vue';

export interface BinocularsWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsWide: DefineComponent<BinocularsWideProps>;

export default BinocularsWide;
export { BinocularsWide };
