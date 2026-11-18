import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCirclePointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCirclePointed: ForwardRefExoticComponent<ChatXCirclePointedProps & RefAttributes<SVGSVGElement>>;

export default ChatXCirclePointed;
export { ChatXCirclePointed };
