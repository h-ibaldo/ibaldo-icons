import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackPlusBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackPlusBroken: ForwardRefExoticComponent<ChatStackPlusBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackPlusBroken;
export { ChatStackPlusBroken };
