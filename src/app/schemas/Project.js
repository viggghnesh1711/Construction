import {z}  from zod;

export const projectSchema = z.object({
    title:z.string()
        .min(6, { message: "minimum 6 characters" })
        .max(16, { message: "maximum 16 characters only" }),

    desc:z.string()
        .min(6, { message: "minimum 6 characters" })
        .max(30, { message: "maximum 30 characters only" }), 

})

export default projectSchema
