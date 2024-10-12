<template>
    <div class="flex min-h-screen w-full flex-col">
        <Header/>
        <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <slot/>
        </main>
    </div>
</template>