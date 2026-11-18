import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatImageBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatImageBroken: ForwardRefExoticComponent<ChatImageBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatImageBroken;
export { ChatImageBroken };
