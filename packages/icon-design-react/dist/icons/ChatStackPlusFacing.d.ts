import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackPlusFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackPlusFacing: ForwardRefExoticComponent<ChatStackPlusFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackPlusFacing;
export { ChatStackPlusFacing };
