import type { DefineComponent } from 'vue';

export interface ClipboardLinkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardLink: DefineComponent<ClipboardLinkProps>;

export default ClipboardLink;
export { ClipboardLink };
