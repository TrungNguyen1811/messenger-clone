import { usePathname } from "next/navigation"
import useConversation from "./useConversation"
import { useMemo } from "react"
import { HiChat, HiUser } from "react-icons/hi"
import { HiArrowLeftOnRectangle } from "react-icons/hi2"
import { signOut } from "next-auth/react"

const useRoutes = () => {
    const pathname = usePathname()
    const {conversationId} = useConversation()

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiChat,
            active: pathname === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: '/users',
            icon: HiUser,
            active: pathname === '/users' 
        },
        {
            label: 'Logout',
            href: '#',
            onClick: () => signOut(),
            icon: HiArrowLeftOnRectangle,
        },
    ], [pathname, conversationId])

    return routes;
}

export default useRoutes;