import type { DefineComponent } from 'vue';

export interface IdCardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const IdCard: DefineComponent<IdCardProps>;

export default IdCard;
export { IdCard };
