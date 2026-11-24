import type { DefineComponent } from 'vue';

export interface CardProfileProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CardProfile: DefineComponent<CardProfileProps>;

export default CardProfile;
export { CardProfile };
