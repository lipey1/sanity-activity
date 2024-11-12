import {defineField, defineType} from 'sanity'

export const artistaType = defineType({
  name: 'artista',
  title: 'Artista',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'number',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'dataNascimento',
      type: 'date',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'telefone',
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      type: 'image',
    }),
    defineField({
      name: 'ativo',
      type: 'boolean',
    }),
    defineField({
      name: 'endereco',
      type: 'endereco',
      to: [{type: 'enderecoType'}],
    }), 
  ],
})