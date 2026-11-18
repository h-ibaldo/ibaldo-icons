import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCircleTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCircleTall: ForwardRefExoticComponent<ChatXCircleTallProps & RefAttributes<SVGSVGElement>>;

export default ChatXCircleTall;
export { ChatXCircleTall };
