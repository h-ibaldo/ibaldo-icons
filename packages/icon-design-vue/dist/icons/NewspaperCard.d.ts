import type { DefineComponent } from 'vue';

export interface NewspaperCardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NewspaperCard: DefineComponent<NewspaperCardProps>;

export default NewspaperCard;
export { NewspaperCard };
