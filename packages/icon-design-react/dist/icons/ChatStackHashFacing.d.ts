import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHashFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHashFacing: ForwardRefExoticComponent<ChatStackHashFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHashFacing;
export { ChatStackHashFacing };
