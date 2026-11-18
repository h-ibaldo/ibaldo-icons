import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackMinusBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackMinusBoxy: ForwardRefExoticComponent<ChatStackMinusBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackMinusBoxy;
export { ChatStackMinusBoxy };
