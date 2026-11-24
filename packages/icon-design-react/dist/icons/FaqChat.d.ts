import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FaqChatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FaqChat: ForwardRefExoticComponent<FaqChatProps & RefAttributes<SVGSVGElement>>;

export default FaqChat;
export { FaqChat };
