import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatInfoBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatInfoBroken: ForwardRefExoticComponent<ChatInfoBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatInfoBroken;
export { ChatInfoBroken };
