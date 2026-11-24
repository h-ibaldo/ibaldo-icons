import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCircleBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCircleBroken: ForwardRefExoticComponent<ChatXCircleBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatXCircleBroken;
export { ChatXCircleBroken };
