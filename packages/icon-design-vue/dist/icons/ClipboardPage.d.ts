import type { DefineComponent } from 'vue';

export interface ClipboardPageProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardPage: DefineComponent<ClipboardPageProps>;

export default ClipboardPage;
export { ClipboardPage };
