import type { DefineComponent } from 'vue';

export interface StarWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StarWide: DefineComponent<StarWideProps>;

export default StarWide;
export { StarWide };
