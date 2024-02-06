import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import { Button } from '@/shadcn/ui/button'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/shadcn/ui/alert-dialog'

import { Avatar, AvatarFallback, AvatarImage } from '@/shadcn/ui/avatar'

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight dark:text-slate-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="p-4 dark:bg-slate-900/75 lg:border-slate-900/10 dark:border-slate-50/[0.06]">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 dark:bg-slate-900/70">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-slate-900/60 p-10">
                        <div className="p-6 text-gray-900">
                            <Button variant="danger">Click me</Button>
                            <AlertDialog>
                                <AlertDialogTrigger>Buka</AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Are you absolutely sure?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This
                                            will permanently delete your account
                                            and remove your data from our
                                            servers.
                                            <Avatar>
                                                <AvatarImage
                                                    src="https://github.com/shadcn.png"
                                                    alt="@shadcn"
                                                />
                                                <AvatarFallback>
                                                    CN
                                                </AvatarFallback>
                                            </Avatar>
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction
                                            onClick={() => alert('ahahaha')}
                                        >
                                            Continue
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quod sint magni fuga nihil numquam totam impedit non inventore perferendis. Voluptatum cum architecto veniam eum a in quis cumque quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo at reiciendis, saepe molestiae, possimus eius cumque voluptas aperiam animi debitis fuga veniam? Commodi asperiores sint omnis, ab odio similique. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae aspernatur blanditiis minus veniam dolor similique excepturi reiciendis, vero sint quibusdam totam eligendi minima cumque beatae. Dolore obcaecati ad exercitationem pariatur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum saepe nihil sapiente placeat eveniet! Tempora iusto ducimus sequi ratione deleniti tenetur eum, qui temporibus fugit architecto sit ea voluptas repellendus?
                        Cum doloremque corrupti unde cupiditate consequuntur velit, ipsum fugit deserunt nesciunt corporis a voluptate minima veniam dicta aliquid temporibus aut odio adipisci incidunt ut ipsa itaque nostrum, facere explicabo? Voluptate?
                        Est recusandae deleniti laudantium delectus adipisci, magni excepturi? Nostrum exercitationem, molestiae architecto voluptatem officia deleniti cumque velit doloribus neque ullam sit, necessitatibus voluptates. Aperiam enim tenetur accusamus ipsa maiores impedit!
                        Odit voluptate cumque nesciunt. Veritatis ipsum tempore excepturi quasi, sunt laborum animi similique, velit rerum sequi quis atque culpa consectetur ex quo? Fugit sapiente incidunt, error at aspernatur repudiandae unde?
                        Fuga delectus qui itaque velit temporibus iste beatae atque laborum ex. Facere tempore odit doloremque possimus nesciunt aliquam beatae sit architecto, aspernatur eos error obcaecati. Accusamus vel tenetur minus voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reiciendis natus quos eum delectus libero repellat neque, sed dignissimos laborum reprehenderit necessitatibus vitae ipsam repellendus consequatur nisi autem? Accusantium, quis?
                        Repellat tempora architecto nulla est possimus rem error reiciendis esse nobis asperiores, blanditiis aliquam molestias eius exercitationem, modi ratione sint. Neque dicta libero quaerat vel. Laudantium, qui? Suscipit, fugiat provident.
                        Reprehenderit ex nostrum placeat porro aspernatur ipsa error, quas provident neque commodi aperiam est totam. Non ex dignissimos doloribus quidem illum molestias, laboriosam est soluta qui sequi corrupti aut a.
                        In quam optio rerum, aliquam reprehenderit odit eos velit minima quas et inventore doloribus maiores dolores blanditiis? Assumenda impedit dolorem culpa, cum hic labore dolorum quos totam, laboriosam explicabo quas.
                        Laboriosam voluptatem tenetur quas tempore, dolorum doloribus, incidunt neque magni perspiciatis distinctio omnis exercitationem cum aperiam adipisci possimus, perferendis mollitia doloremque. Quidem laboriosam eos sint, dolore vero ipsa libero voluptate.
                        Minima impedit expedita neque numquam nihil! Totam aliquam nulla maiores id expedita in quaerat ut eum sint pariatur? Vero voluptates assumenda, fuga reprehenderit quaerat voluptatibus ipsam distinctio minima cumque reiciendis?
                        Vero inventore voluptate magni fuga eos provident dolore, aliquid, architecto quo enim non temporibus a iusto hic dignissimos sed totam esse, rem consequatur qui mollitia voluptates! Quidem accusantium asperiores sint.
                        Temporibus suscipit pariatur incidunt nam, ratione enim hic impedit voluptate, quae harum dicta accusantium doloribus ab nemo tempore aperiam culpa odit sunt nihil eveniet quo cumque ullam. Quia, dolore laudantium?
                        Nostrum sunt nemo voluptates incidunt in, labore ratione veniam pariatur soluta dolor cum hic placeat eum deserunt reiciendis voluptate modi inventore accusamus magni eos. Assumenda velit a dolorem minima tempora.
                        Id soluta, explicabo ipsam unde ea dolore minus autem vel culpa laudantium esse, provident, blanditiis repellendus molestiae perferendis ipsum a beatae doloremque? Id animi eius perspiciatis tenetur ad fugit quos.
                        Ducimus quia dolorum earum atque, enim voluptatibus! Sequi quia nemo saepe commodi culpa expedita doloremque adipisci minus? Eum consequatur quidem harum praesentium amet, expedita, suscipit atque molestiae nam laborum officiis!
                        Quo quisquam, tempore vel odit sint labore debitis hic consequatur numquam nesciunt aliquam culpa ratione atque, deleniti eligendi corrupti deserunt, vitae minima! Pariatur explicabo aperiam aliquid maxime ullam, incidunt quidem!
                        Voluptas molestias magnam blanditiis ducimus dolore est possimus doloremque, aspernatur reprehenderit exercitationem vel reiciendis, a necessitatibus nemo suscipit laudantium nulla recusandae ratione delectus aliquid quidem optio quae at officia! Deleniti?
                        Mollitia vel exercitationem eaque tempora explicabo neque ut maiores quod itaque totam beatae unde officia alias eligendi natus esse asperiores iste non, quaerat nostrum atque incidunt saepe? Temporibus, maiores iste.
                        Et ea, provident eius aliquid blanditiis voluptatum error pariatur libero temporibus, autem soluta alias labore voluptas delectus ipsum architecto cum rerum nam vel numquam magni nostrum. Nihil assumenda beatae modi.
                        Odit, cupiditate consequatur. At repellendus sit eaque debitis alias aperiam dolorum natus enim illo saepe, ducimus fuga est aliquid voluptas mollitia accusantium. Laboriosam tempore recusandae exercitationem fugiat reiciendis dolores? Iure!
                        Ea provident beatae harum consequatur inventore nobis quasi fuga minus accusantium exercitationem dolorem dolores commodi totam tenetur incidunt sed sint optio est autem corrupti, molestiae asperiores vero fugiat odio. Enim.
                        Sed amet ipsa ab accusantium nobis iusto modi facere? Non placeat eligendi nemo rerum mollitia laboriosam et aliquam dicta, ratione molestias aut culpa dignissimos nostrum laborum quasi ducimus accusamus vitae!
                        Vero error officiis nobis tenetur. Doloribus magnam dolorum a cum similique est? Eos sint aperiam earum, repellat magnam eveniet minima numquam! Totam officia dolores tenetur sequi nihil eveniet ex enim.
                        Neque aspernatur repudiandae, animi odio dolorem quis ab, nisi, officiis exercitationem autem omnis modi dolor porro maxime doloribus! Qui dicta aliquid, reprehenderit illum nulla beatae similique! Illum, facere minima? Vel.
                    </div>
                </div>
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="grid grid-cols-3 gap-4 mb-4">
               <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
               <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
               <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
               <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                  </svg>
               </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
               <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
               <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
               <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
               <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
               <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                  </svg>
               </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
               <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
               <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
               <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                     <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
            </div>
         </div>
            </div>
        </AuthenticatedLayout>
    )
}
