import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCircleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCircleWide: ForwardRefExoticComponent<ChatXCircleWideProps & RefAttributes<SVGSVGElement>>;

export default ChatXCircleWide;
export { ChatXCircleWide };
