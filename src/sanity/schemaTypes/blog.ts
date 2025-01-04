
import { defineType,defineField,defineArrayMember } from "sanity"

export const blog = defineType({
    name: "blog",
    type: "document",
    title: "Blog",
    fields: [
        defineField(
        {
            name:'title',
            type:'string',
            title:'Blog Title'
        }),
    
    //slug field
    defineField({
        name:'slug',
        type:'slug',
        title:'Slug',
        options:{
            source:'title'
        },
        validation:Rule=>Rule.required()
    }),
    defineField({
        name:'summary',
        type:'text',
        title:'Summary',
        validation:Rule =>Rule.required()
    }),
    defineField({
        name:'image',
        type:'image',
        title:'Blog Image',
        
    }),
    defineField({
        name:'content',
        type:'array',
        title:'Content',
        of:[
            defineArrayMember({
                type:'block'
            })
        ]
    }),
    defineField({
        name:'author',
        type:'reference',
        title:'Author',
        to:[{
            type:'author'
        }]

    })

    
    
    
    
    ]});