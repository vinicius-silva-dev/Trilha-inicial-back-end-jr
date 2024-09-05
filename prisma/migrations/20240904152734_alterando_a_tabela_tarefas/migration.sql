/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `tarefas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tarefas_title_key" ON "tarefas"("title");
