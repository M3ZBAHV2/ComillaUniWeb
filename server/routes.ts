import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Frontend-only application - no API routes needed
  
  const httpServer = createServer(app);
  return httpServer;
}
