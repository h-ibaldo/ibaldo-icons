import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsFacing: ForwardRefExoticComponent<ChatStackDotsFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsFacing;
export { ChatStackDotsFacing };
