import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackForwardBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackForwardBoxy: ForwardRefExoticComponent<ChatStackForwardBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackForwardBoxy;
export { ChatStackForwardBoxy };
