import type { DefineComponent } from 'vue';

export interface NewspaperTornCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NewspaperTornCurl: DefineComponent<NewspaperTornCurlProps>;

export default NewspaperTornCurl;
export { NewspaperTornCurl };
