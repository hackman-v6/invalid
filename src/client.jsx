import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ixvhkmerwkbkqhkzbguw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4dmhrbWVyd2tia3Foa3piZ3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc2MDk4NDUsImV4cCI6MjAwMzE4NTg0NX0.cikKpCz7Ksjsi8VKki6Lq_9YzikxV2MiHbTWQnsiBc0'
export const supabase = createClient(supabaseUrl, supabaseKey)