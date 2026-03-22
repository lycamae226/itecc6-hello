import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oaqfuxmwvepaftnrurmm.supabase.co'
const supabaseKey = 'sb_publishable_5t2k-_gvqDF90-1NW9NKng_HFIzfgUZ'

export const supabase = createClient(supabaseUrl, supabaseKey)
