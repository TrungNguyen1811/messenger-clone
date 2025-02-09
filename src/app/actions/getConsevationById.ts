import { useParams } from "next/navigation"
import prisma from "@/app/libs/prismadb"
import getCurrentUser from "./getCurrentUser"

const getConversationByID = async (
    conversationId: string
) => {
    try {
        const currentUser = await getCurrentUser()

        if (!currentUser?.email) {
            return null
        }

        const conservation = await prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                users: true
            }
        })

        return conservation
    } catch (error: any) {
        return null
    }
}

export default getConversationByID