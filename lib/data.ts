import { prisma } from "@/lib/prisma";

export const getContacts = async (query: string, currentPage: number) => {
    try {
        const contacts = await prisma.contact.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                            mode: "insensitive"
                        }
                    },
                    {
                        phone: {
                            contains: query,
                            mode: "insensitive"
                        }
                    }
                ]
            },
            skip: (currentPage - 1) * 10,
            take: 10
        });
        return contacts;
    } catch (error) {
        throw new Error("Failed to fetch contacts");
    }
}

export const getContactById = async (id: string) => {
    try {
        const contact = await prisma.contact.findUnique({
            where: {
                id: id
            }
        });
        return contact;
    } catch (error) {
        throw new Error("Failed to fetch contacts");
    }
}